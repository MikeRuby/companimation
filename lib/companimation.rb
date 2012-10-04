require 'compass'
extension_path = File.expand_path(File.join(File.dirname(__FILE__), ".."))
Compass::Frameworks.register('companimation', :path => extension_path)