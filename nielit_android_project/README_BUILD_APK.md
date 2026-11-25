# NIELIT Gorakhpur Portal Android wrapper

This project wraps the refreshed website assets in an Android WebView and can produce an installable debug APK.

## Build using Android Studio
1. Install Android Studio and its Android SDK (API 35) and JDK 17.
2. Open this project folder in Android Studio.
3. Let Gradle sync finish.
4. Choose Build > Build Bundle(s) / APK(s) > Build APK(s).
5. The APK is at `app/build/outputs/apk/debug/app-debug.apk`.

## Build using GitHub Actions (no Android Studio on your computer)
1. Create a GitHub repository and upload/push this project.
2. Go to Actions > Build Android APK > Run workflow (or push to main).
3. When the workflow completes, open the run and download the artifact named `NIELIT-Gorakhpur-Portal-APK`.
4. Extract `app-debug.apk`, transfer it to your phone, and tap it to install. Allow installation from that source if Android asks.

The debug APK is suitable for testing/installing. For Play Store publishing, create a signed release build.
