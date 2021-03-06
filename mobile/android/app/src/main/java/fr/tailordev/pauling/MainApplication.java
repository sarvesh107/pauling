package fr.tailordev.pauling;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.reactnative.photoview.PhotoViewPackage;
import org.wonday.pdf.RCTPdfView;
import com.cboy.rn.splashscreen.SplashScreenReactPackage;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
            new PhotoViewPackage(),
            new RCTPdfView(),
        new SplashScreenReactPackage(),
        new RCTCameraPackage(),
        new RNFetchBlobPackage(),
        new ReactNativeConfigPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
