//  Created by react-native-create-bridge

// import UIKit so you can subclass off UIView
#import <UIKit/UIKit.h>
#import <React/RCTComponent.h>

@class RCTEventDispatcher;

@interface SimpleView : UIView
  // Define view properties here with @property
  @property (weak, nonatomic) IBOutlet UILabel *simpleLabel;
  @property (nonatomic, copy) RCTBubblingEventBlock onClearTapped;

  // Creating with the event dispatcher allows us to communicate with JS
  + (instancetype)createWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher;

@end
