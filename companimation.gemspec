Gem::Specification.new do |s|

    # Version Info
    s.version = "0.2.0"
    s.date = "2012-10-24"

    # Details
    s.name = "companimation"
    s.authors = ["Mike Fowler"]
    s.summary = %q{A set of Compass mixins to make creating CSS Animations a breeze.}
    s.description = %q{A set of Compass mixins to make creating CSS Animations a breeze.}
    s.email = "mike@mikefowler.me"
    s.homepage = "http://mikefowler.me"

    # Files
    s.files = Dir.glob("stylesheets/**/*.*")
    s.files += Dir.glob("lib/**/*.*")

    # Dependencies
    s.add_dependency("compass", [">= 0.12"])

end