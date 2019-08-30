package com.demoproject;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;

import javax.annotation.Nullable;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "DemoProject";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Nullable
            @Override
            protected Bundle getLaunchOptions() {
                Bundle bundle = new Bundle();
                bundle.putString("initMessage", "Hello from Native");
                return bundle;
            }
        };
    }
}
