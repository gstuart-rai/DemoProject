//  Created by react-native-create-bridge

package com.demoproject.simpleview;

import android.view.View;
import android.widget.TextView;

import com.demoproject.R;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

public class SimpleNativeViewManager extends SimpleViewManager<SimpleView> {
    public static final String REACT_CLASS = "SimpleView";

    @Override
    public String getName() {
        // Tell React the name of the module
        // https://facebook.github.io/react-native/docs/native-components-android.html#1-create-the-viewmanager-subclass
        return REACT_CLASS;
    }

    @Override
    public SimpleView createViewInstance(ThemedReactContext context) {
        // Create a view here
        // https://facebook.github.io/react-native/docs/native-components-android.html#2-implement-method-createviewinstance
        return new SimpleView(context);
    }

    @ReactProp(name = "title")
    public void setTitle(View view, String prop) {
        TextView simpleLabel = view.findViewById(R.id.simpleLabel);
        simpleLabel.setText(prop);
    }

    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder()
                .put(
                        "onClearTapped",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", "onClearTapped")))
                .build();
    }
}
