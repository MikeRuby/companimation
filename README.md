# Companimation

CSS animations. In Compass. Real easy-like. Sodding brilliant.

## Overview

_Another animation extension for Compass? Seriously? But Mike, Why?_ 

The truth is, I use Compass a lot. Recently I've started using animations a lot more on certain projects, so naturally I started looking for a better way to handle them since currently Compass does not provide any mixins for animations. So... I looked around at the extensions already available and decided I'd rather do it my way. So I did. HUZZAH!

Companimation provides two unique things: a basic set of mixins to help you create your own animations, and a collection of presets (both original and sourced from [Dan Eden's Animate.css](http://daneden.me/animate/)) to get you up and running fast.

## Installation and Usage

Companimation is available as a RubyGem. To install it, open up a terminal and type:

``` bash
gem install companimation
```

After you've installed the gem, getting Companimation into your project is as easy as requiring it in your Compass configuration file and then importing it into your Sass stylesheet:

```
// config.rb
require 'companimation'

// app.scss
@import 'companimation';
```

## Using Presets

Using presets in Companimation is a breeze. Presets take advantage of Sass 3.2 placeholder selectors. Importing a preset creates a placeholder selector which you can then use with @extend on any selector in your stylesheet. Like this:

``` scss
@import 'companimation';
@import 'companimation/preset/fade';

body {
	@extend %fadeIn;
}

#main {
	@extend %fadeInUp;
}
```

That's it. Really. The full list of presets can be found below.

## Changing Default Settings

Companimation has some default variables that you can override by setting before you import the library. Here they are, with their default values.

``` scss
$default-animation-duration: 1s;
$default-animation-timing-function: ease;
$default-animation-fill-mode: both;
$default-animation-iterations: 1;
$default-animation-direction: normal;
$default-animation-play-state: running;
$default-animation-delay: 2s;
```

## Creating Animations

Even though Companimation comes with a bunch of presets to get you started quick, it also exposes all of the mixins used internally to quickly create animations.

**A note about browser support:** The following mixins will output browser prefixes based on what you've defined for [Compass's Cross-Browser Support](http://compass-style.org/reference/compass/support/) configuration variables.

  * [animation](#mixin-animation)
    * [animation-name](#mixin-animation-name)
    * [animation-duration](#mixin-animation-duration)
    * [animation-timing-function](#mixin-animation-timing-function)
    * [animation-fill-mode](#mixin-animation-fill-mode)
    * [animation-iteration-count](#mixin-animation-iteration-count)
    * [animation-direction](#mixin-animation-direction)
    * [animation-play-state](#mixin-animation-play-state)
    * [animation-delay](#mixin-animation-delay)
  * [keyframes](#mixin-keyframes)
    * [webkit-keyframes](#mixin-keyframes-webkit)
    * [moz-keyframes](#mixin-keyframes-mozilla)
    * [o-keyframes](#mixin-keyframes-opera)
    * [official-keyframes](#mixin-keyframes-official)


### <a name="mixin-animation">#</a> animation($name, $duration, $timing, $iterations, $delay, $fill, $direction, $state)

A convenience function for defining multiple properties for an animation at once. All properties except $name are optional. Pass 'null' for a parameter to prevent it from being set. Useful for setting all, or all but one or two, properties.

Example:

``` scss
@include animation( 'fadeIn', 2s, ease-in-out );

// OR

@include animation( 'flash', 1s, null, 2, null, both);
```

### <a name="mixin-animation-name">#</a> animation-name( $name )

Specifies the name of an animation to use. The string $name must correspond with the name of a set of keyframes defined using one of the keyframe mixins. ([W3C Spec Reference](http://www.w3.org/TR/css3-animations/#animation-name-property))

Example: ```@include animation-name( 'fadeIn' );```

### <a name="mixin-animation-duration">#</a> animation-duration( $duration )

Specifies the duration of an animation in seconds or milliseconds. ([W3C Spec Reference](http://www.w3.org/TR/css3-animations/#animation-duration-property))

Example: ```@include animation-duration( 2s );```

### <a name="mixin-animation-timing-function">#</a> animation-timing-function( $timing )

Specifies a built-in or custom timing function to use for an animation where $timing may be: 'ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out', 'step-start', 'step-end', 'steps()' or 'cubic-bezier()'. ([W3C Spec Reference](http://www.w3.org/TR/css3-animations/#animation-timing-function-property))

Example: ```@include animation-timing-function( ease-in );

### <a name="mixin-animation-fill-mode">#</a> animation-fill-mode( $mode )

Specifies a fill mode to be used for an animation where $mode may be: 'none', 'forwards', 'backwards' or 'both'. ([W3C Spec Reference](http://www.w3.org/TR/css3-animations/#animation-fill-mode-property))

Example: ```@include animation-fill-mode( both );```

### <a name="mixin-animation-iteration-count">#</a> animation-iteration-count( $count )

Specifies the number of times an animation should play where $count is an integer. ([W3C Spec Reference](http://www.w3.org/TR/css3-animations/#animation-iteration-count-property))

Example: ```@include animation-iteration-count( 3 );```

### <a name="mixin-animation-direction">#</a> animation-direction( $direction )

Specifies the direction an animation should play in where $direction can be: 'normal', 'reverse', 'alternate', or 'alternate-reverse'. ([W3C Spec Reference](http://www.w3.org/TR/css3-animations/#animation-direction-property))

Example: ```@include animation-direction( reverse );```

### <a name="mixin-animation-play-state">#</a> animation-play-state( $state )

Specifies whether an animation is running or paused, where $state may be: 'running' or 'paused'. ([W3C Spec Reference](http://www.w3.org/TR/css3-animations/#animation-play-state-property))

Example: ```@include animation-play-state( paused );```

### <a name="mixin-animation-delay">#</a> animation-delay( $delay )

Specifies a delay to apply to an animation, in seconds or milliseconds. ([W3C Spec Reference](http://www.w3.org/TR/css3-animations/#animation-delay-property))

Example: ```@include animation-delay( 2s );```

### <a name="mixin-keyframes">#</a> keyframes( $name ) { @content }

Specifies a set of keyframes where each CSS property in the given keyframes are compatible across all modern browsers. This mixin should **not** be used if you are passing in properties with browser prefixes. ([W3C Spec Reference](http://www.w3.org/TR/css3-animations/#keyframes))

Example:

``` scss
@include keyframes( 'fadeIn' ) {
	0%   { opacity: 0; }
    100% { opacity: 1; }
}
```

### <a name="mixin-keyframes-webkit">#</a> webkit-keyframes( $name ) { @content }

Specifies a set of keyframes to be used for Webkit-based browsers. This mixin is implemented in the same manner as keyframes() above.

### <a name="mixin-keyframes-mozilla">#</a> moz-keyframes( $name ) { @content }

Specifies a set of keyframes to be used for Mozilla-based browsers. This mixin is implemented in the same manner as keyframes() above.

### <a name="mixin-keyframes-opera">#</a> o-keyframes( $name ) { @content }

Specifies a set of keyframes to be used for Opera browsers. This mixin is implemented in the same manner as keyframes() above.

### <a name="mixin-keyframes-official">#</a> official-keyframes($name) { @content }

Specifies a set of keyframes to be used for browsers that support the official @keyframes syntax. This mixin should be used in conjunction with one or more of the browser-specific keyframe mixins. If you are **only** using this mixin, you may as well just use the global keyframes() mixin above. This mixin is implemented in the same manner as keyframes() above.

## Preset List

By default, Companimation includes a set of mixins to get you started quickly. These presets include animations unique to Companimation, as well as a full port of [Dan Eden's Animate.css](http://daneden.me/animate/). Presets work similar to the way Compass modules work: you can import entire categories of animations at once, or individually if you prefer granular imports.

To use any of these presets, import an animation (or its category) and then use @extend on the selector you wish to apply the animation to. The name of any given animation for extending purposes is the same as the last part of the import path.

Example:

``` scss
@import 'companimation/preset/bounce/bounceIn';

h1 {
	@extend %bounceIn;
}
```

* bounce
  * bounce
  * bounceIn
  * bounceInDown
  * bounceInLeft
  * bounceInRight
  * bounceInUp
  * bounceOut
  * bounceOutDown
  * bounceOutLeft
  * bounceOutRight
  * bounceOutUp
* fade
  * fadeIn
  * fadeInDown
  * fadeInDownBig
  * fadeInLeft
  * fadeInLeftBig
  * fadeInRight
  * fadeInRightBig
  * fadeInUp
  * fadeInUpBig
  * fadeOut
  * fadeOutDown
  * fadeOutDownBig
  * fadeOutLeft
  * fadeOutLeftBig
  * fadeOutRight
  * fadeOutRightBig
  * fadeOutUp
  * fadeOutUpBig
* filters (<span style="color: red; font-weight: bold;">experimental</span>)
  * blurIn
  * blurInDown
  * blurInLeft
  * blurInRight
  * blurInUp
  * blurOut
  * blurOutDown
  * blurOutLeft
  * blurOutRight
  * blurOutUp
  * greyscaleIn
  * greyscaleOut
* flip
  * flip
  * flipInX
  * flipInY
  * flipOutX
  * flipOutY
* roll
  * rollIn
  * rollOu
* rotate
  * rotateIn
  * rotateInDownLeft
  * rotateInDownRight
  * rotateInUpLeft
  * rotateInUpRight
  * rotateOut
  * rotateOutDownLeft
  * rotateOutDownRight
  * rotateOutUpLeft
  * rotateOutUpRight
* special
  * flash
  * hinge
  * lightSpeedIn
  * lightSpeedOut
  * pulse
  * shake
  * swing
  * tada
  * wiggle
  * wobble
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 







