# Companimation

CSS animations. In Compass. Real easy-like. Sodding brilliant.

## Overview

_ Another animation extension for Compass? Seriously? But Mike, Why? _ 

The truth is, I use Compass a lot. Recently I've started using animations a lot more on side projects, so naturally I started looking for a better way to handle them, since currently Compass does not provide any mixins for animations. So... I look around at the extensions already available and decided I'd rather do it my way. So I did. HUZZAH!

Companimation provides two unique things: a basic set of mixins to help you create your own animations, and a collection of presets (both original and sourced from Dan Eden's Animate.css) to get you up and running fast.

## Installation and Usage

Companimation is available as a RubyGem. To install it, open up a terminal and type:

``` bash
gem install companimation
```

After you've installed the gem, getting Companimation into your project is as easy as importing it into your file:

``` scss
@import 'companimation';
```

## Using Presets

Using presets in Companimation is a breeze. Presets take advantage of Sass 3.2 placeholder selectors. Importing a preset creates a placeholder selector which you can then use with @extend on any selector in your stylesheet. Let me illustrate.

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

@todo

### <a name="mixin-animation-name">#</a> animation-name($name)

@todo

### <a name="mixin-animation-duration">#</a> animation-duration($duration)

@todo

### <a name="mixin-animation-timing-function">#</a> animation-timing-function($timing)

@todo

### <a name="mixin-animation-fill-mode">#</a> animation-fill-mode($mode)

@todo

### <a name="mixin-animation-iteration-count">#</a> animation-iteration-count($count)

@todo

### <a name="mixin-animation-direction">#</a> animation-direction($direction)

@todo

### <a name="mixin-animation-play-state">#</a> animation-play-state($state)

@todo

### <a name="mixin-animation-delay">#</a> animation-delay($delay)

@todo

### <a name="mixin-keyframes">#</a> keyframes($name) { @content }

@todo

### <a name="mixin-keyframes-webkit">#</a> webkit-keyframes($name) { @content }

@todo

### <a name="mixin-keyframes-mozilla">#</a> moz-keyframes($name) { @content }

@todo

### <a name="mixin-keyframes-opera">#</a> o-keyframes($name) { @content }

@todo

### <a name="mixin-keyframes-official">#</a> official-keyframes($name) { @content }

@todo



## Preset List

By default, Companimation includes a set of mixins to get you started quickly. These presets include animations unique to Companimation, as well as a full port of Dan Eden's Animate.css. Presets work similar to the way Compass modules work: you can import entire categories of animations at once, or individually if you prefer granular imports.