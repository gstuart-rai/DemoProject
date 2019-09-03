//  Created by react-native-create-bridge
#import <UIKit/UIKit.h>
#import "SimpleView.h"

// import RCTEventDispatcher
#import <React/RCTEventDispatcher.h>


@implementation SimpleView  {

  RCTEventDispatcher *_eventDispatcher;
  
}

+ (instancetype)createWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher
{
    NSArray *xibObjs = [[NSBundle mainBundle] loadNibNamed:NSStringFromClass(self) owner:nil options:nil];
    SimpleView *view = xibObjs.lastObject;
    
    view.eventDispatcher = eventDispatcher;
    
    return view;
}

- (void)setEventDispatcher:(RCTEventDispatcher *)eventDispatcher
{
  if (_eventDispatcher != eventDispatcher) {
    _eventDispatcher = eventDispatcher;
  }
}
- (IBAction)didTapClearButton:(id)sender {
  self.onClearTapped(nil);
}

@end
