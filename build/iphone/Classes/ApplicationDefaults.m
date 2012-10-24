/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"mmZUkEPS9KYsbhsbwt66PKawJ8gJjieY"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"Hnc0j3JwniZ6kjJiYNG4BSgIT0YUAydd"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"WEothNM1H7GU0Yt9gRiYNhhvdGqaECD9"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"UQJrGZhQ9BPqXPaBBJOH4u3MLSfFIIoU"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"O735D76F5gbdtd3Ns5rhkBS5dQ2dFa2j"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"Aj0kYVrDD0hw122xfKHDvUw4R6eCCBis"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
