---
layout: post
title: "Random Ruby Tips"
category: "summary"
---

Here's a summary of the history of Random Ruby Tips for the ruby meetup..
Together with a the title of the talks

- [Nov 19, 2013](http://www.meetup.com/Singapore-Ruby-Group/events/150110982/)
  - Talks
    1. Install Native Dependencies Using Natives Gem, by Teo Hui Ming, @teohm, 
       Favorite Medium
    2. Hello Elixir!  - Benjamin Tan, @bentanweihao
    3. 5 Random Ruby Tips - Dr. Khoo Chong-Yee, @CantabIP
  - Meta
    - Venue Sponsor: Silicon Straits 
    - Food Sponsor: Engine Yard
    - Venue: Silicon Straits, Blk 71 #06-11/12
  - Random Ruby Tips
    1. Rubular: ruby regular expression editor
    2. bundler 1.4.0 -- parallel install

            bundle install -j4  # install with 4 jobs

    3. `bundle console` - start IRB session with all gems in Gemfile
    4. Ruby GC Settings (but take note, different Ruby got different optimized
       GC setting)
    5. Keep Ruby Notes in Evernote

- [Dec 17, 2013](http://www.meetup.com/Singapore-Ruby-Group/events/152460012/)
  - Meta
    - Venue: Plugin@Blk71
    - Sponsor: Engine Yard
  - Talks
    1. How GitHub Uses GitHub To Build GitHub, twofish Edition. by Michael Harris, @michaeltwofish, GitHub
    2. Sinatra vs. Rails (Remote Talk). by PJ Hagerty, @aspleenic, Engine Yard
    3. 5 Random Ruby Tips. by Teo Yinquan, @yinquanteo, ReferralCandy
  - Random Ruby Tips <https://www.youtube.com/watch?v=_xTdkYGisYw&list=PLECEw2eFfW7hYMucZmsrryV_9nIc485P1&index=1>
    1. Temefile: <http://ruby-doc.org/stdlib-1.9.3/libdoc/tempfile/rdoc/Tempfile.html>
      - random scripts
    2. `active_support/core_ext/hash`
      1. except
      2. slice
      3. stringify_keys
      4. symbolize_keys
    3. `string_inquirer`
      
            en = ActiveSupport::StringInquirer.new('haha')
            en.haha? # true
            en.anything_else? # false. this `anything_else` can be anything

    4. irb: reverse search(ctrl-R) / ctrl-A / ctrl-E / _ 
    5. Design Patterns
      1. Singleton
      2. Delegation: forwardable
- [Jan 21, 2014](http://www.meetup.com/Singapore-Ruby-Group/events/158569682/)
  - Meta
    - Venue: Silicon Straits
    - Sponsor: Engine Yard
  - Talks
    1. Building API Auth One Rack App At A Time, Donal Ellis, Perx
    2. A Look At Ruby 2.1, Benjamin Tan, @bentanweihao, Qisahn
    3. 5 Random Ruby Tips, Teo Hui Ming, @teohm, Favorite Medium
  - Random Ruby Tips: <https://speakerdeck.com/teohm/rubysg-2014-jan-5-random-ruby-tips>
    1. can remove database.yml, and use `ENV['DATABASE_URL']`
    2. `rails-assets.org`
    3. non-js/css in assets pipeline

            # config/environments/production.rb
            config.assets.precompile << lambda do |filename, path|
              path =~ /vendor\/assets/ && 
                      !%w(.js .css).include?  File.extname(filename)
            end

    4. conversion protocol
      - `to_str`: called by Ruby core classes when expect to get a String
      - `to_s`: call by you to explicitly convert from a different type to String
    5. shell: useful ag options  [From Book: Conquering the Command Line]

- [Feb 18, 2014](http://www.meetup.com/Singapore-Ruby-Group/events/164411622/)
  - Meta
    - Venue: Paypal Singapore
    - Sponsor: Paypal
  - Talks
    1. A Tale of Two Frameworks, by Sau Sheong, @sausheong, PayPal 
    2. Building The Luxe Nomad, by Simon Males @simonmales & Wei Meng @weimeng, Tinkerbox
    3. 5 Random Ruby Tips, by Teo Yinquan, @yinquanteo, ReferralCandy
  - Random Ruby Tips: <http://slides.com/yinquanteo/5-more-ruby-tips#/>
    1. HTTP Server: `ruby -run -e httpd . -p 8080` (server static files)
    2. Inline Heredoc

            def beautiful_text
              <<-HERE.strip_heredoc
                Beautifully indented
                isn't it?
              HERE
            end

    3. ruby scriptiong: `printf "super\nsize\nme" | ruby -ne 'puts $_.upcase'`
    4. uri query params: 

            require 'active_support/core_ext'
            params = { scope: 'something', fields: [1, 2, 'c'] }
            params.to_query # "fields%5B%5D=1&fields%5B%5D=2&fields%5B%5D=c&scope=something"

            require 'rack'
            query = "url=http%3A%2F%2Freferralcandy.com&scope=read%26profit"
            Rack::Utils.parse_nested_query(query)

    5. Rescuing From Exception:
            
            # bad
            begin
            rescue Exception => e
            end

            # good (but why?)
            begin
            rescue => e
            end

- [March 18, 2014](http://www.meetup.com/Singapore-Ruby-Group/events/167933752/)
  - Meta
    - Venue: Silicon Straits
    - Sponsor: 
      - Food: Engine Yard
      - Drinks: ThoughtWorks
  - Talks:
    1. Statsd/Graphite + Roomorama, by Nicolas Gaivironsky, @coffeeworks, Roomorama
    2. Building RubyAsia.com with Padrino, by Winston, @winstonyw, Jolly Good Code
    3. 5 Random Ruby Tips, by Karthik T, Favorite Medium
  - Random Ruby Tips: Not Found Online... : (

- [April 29, 2014](http://www.meetup.com/Singapore-Ruby-Group/events/174440162/)
  - Meta
    - Venue: Plugin@Blk71
    - Sponsor: Engine Yard
  - Talks:
    1. API Server With Rails, by Sayanee Basu, `@sayanee_`
    2. Making DSL, by Yukio Goto, Rakuten
    3. 5 Random Ruby Tips, by Donal Ellis, Perx
  - Ruby Tips(notes from <http://pastebin.com/Xwk1HA7H>)
    1. Timecop
    2. binding.pry
    3. params[:type].classify.constantize
    4. brakeman
    5. semaphoreapp.com
    3. cane
- [May 20, 2014](http://www.meetup.com/Singapore-Ruby-Group/events/180994282/)
  - Meta
    - Venue: Silicon Straits
    - Sponsor: Engine Yard
  - Talks
    1. Rubymine Tips and Tricks, by David Hu, Tinkerbox
    3. 5 Random Ruby Tips, by Chethan Anil, ReferralCandy
  - Ruby Tips(Not Found Online...)

- [June 17, 2014](http://www.meetup.com/Singapore-Ruby-Group/events/184248862/)
  - Meta
    - Venue: ThoughtWorks
    - Sponsor: ThoughtWorks
  - Talks
    1.  Feature Toggles, by Anand Agrawal, ThoughtWorks
    2.  Data Anonymization Gem , by Satyam Agarwala, ThoughtWorks
    3.  5 Random Ruby Tips, by Garima Singh, ThoughtWorks
  - Ruby Tips(Not Found Online...)
    
- [July 15, 2014](http://www.meetup.com/Singapore-Ruby-Group/events/192768632/)
  - Meta
    - Venue: ThoughtWorks
    - Sponsor: ThoughtWorks
  - Talks
    1. Vagrant + Ansible, by Michael Cheng, @coderkungfu, Neo Innovations
    2. Bundler vs. npm Dependency Management, by Wei Lu, @luweidewei, Hive Wallet
    3. 5 Random Ruby Tips 
  - Ruby Tips(Not Found Online... Event the speaker is not found)

- [Aug 12, 2014](http://www.meetup.com/Singapore-Ruby-Group/events/198313732/)
  - Meta
    - Venue: Plugin@Blk71
    - Sponsor: Engine Yard
  - Talks
    1. Exception Tracking with Rollbar, by Yink, @yinquanteo, ReferralCandy
    2. Overcommit Gem, by Tan Guo Xiang, Currently working on GSoC, Rails  
    3. 5 Random Ruby Tips

- [Sept 23, 2014](http://www.meetup.com/Singapore-Ruby-Group/events/204589252/)
  - Meta
    - Venue: Neo Innovation, 53A Craig Road
    - Sponsor: Neo
  - Talks
    1. Paul Henrich on Ruby Kaigi
    2. Winston Teo on the Ruby challenge (http://therubychallenge.com)
    3. Yink Teo with 5 Random Ruby Tips
  - Ruby Tips: <http://slides.com/yinquanteo/5-moar-ruby-tips>
    1. underscore in ruby numbers: `1_100`
    2. local variable assignment in conditional body:

            if false
              x = 5
            end
            x # => nil  

    3. turnout gem
    4. retry (in rescue)
    5. rubycritic: code quality reporter
- [Sept 23, 2014](http://www.meetup.com/Singapore-Ruby-Group/events/204589252/)
  - Meta
    - Venue: IDA Labs Level 3 @ National Design Centre
    - Sponsor: Engine Yard
  - Talks
    1. "Polyglot; or how to write a web app with 6 programming languages", by Chang Sau Sheong, @sausheong, PayPal
    2. "Contributing to Ruby on Rails for Beginners Like Me", by Alan Tan Guo Xiang, Rails Google Summer of Code student
    3. 5 Random Ruby Tips, by Joel Low

(To Be Continued)
