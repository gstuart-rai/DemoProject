//  Created by react-native-create-bridge

#import <Foundation/Foundation.h>
#import "SimpleView.h"
#import "SimpleViewManager.h"

// import RCTBridge
#if __has_include(<React/RCTBridge.h>)
#import <React/RCTBridge.h>
#elif __has_include(“RCTBridge.h”)
#import “RCTBridge.h”
#else
#import “React/RCTBridge.h” // Required when used as a Pod in a Swift project
#endif

@implementation SimpleViewManager

@synthesize bridge = _bridge;

// Export a native module
// https://facebook.github.io/react-native/docs/native-modules-ios.html
RCT_EXPORT_MODULE();

// Return the native view that represents your React component
- (UIView *)view
{
    return [SimpleView createWithEventDispatcher:self.bridge.eventDispatcher];
//  return [[SimpleView alloc] initWithEventDispatcher:self.bridge.eventDispatcher];
}


RCT_REMAP_VIEW_PROPERTY(title, simpleLabel.text, NSString)

RCT_EXPORT_VIEW_PROPERTY(onClearTapped, RCTBubblingEventBlock)

// Export constants
// https://facebook.github.io/react-native/releases/next/docs/native-modules-ios.html#exporting-constants
- (NSDictionary *)constantsToExport
{
  return @{
           @"EXAMPLE": @"example"
         };
}

+ (BOOL)requiresMainQueueSetup {
  return YES;
}

@end
