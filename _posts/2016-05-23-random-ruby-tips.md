---
layout: post
title: "Random Ruby Tips"
category: "language"
tags: "front-page"
lang: en
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

    5. Rescuing From Exception, Explanation: 
       <http://stackoverflow.com/questions/10048173/why-is-it-bad-style-to-rescue-exception-e-in-ruby>
            
            # bad
            begin
            rescue Exception => e
            end

            # better
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
- [Oct 28, 2014](<http://www.meetup.com/Singapore-Ruby-Group/events/211960182/>)
  - Meta
    - Venue: IDA Labs Level 3 @ National Design Centre
    - Sponsor: Engine Yard
  - Talks
    1. "Polyglot; or how to write a web app with 6 programming languages", by Chang Sau Sheong, @sausheong, PayPal
    2. "Contributing to Ruby on Rails for Beginners Like Me", by Alan Tan Guo Xiang, Rails Google Summer of Code student
    3. 5 Random Ruby Tips, by Joel Low

- [Nov 29, 2014](<http://www.meetup.com/Singapore-Ruby-Group/events/217945412/>)
  - Meta
    - Venue: National Design Center, IDA Lab
    - Sponsor: Engine Yard
  - Talks
    1. "mRuby" - Michał Koźmiński, @MichalKozminski
    2. Unconventional Rails: Things we do at Tobi.com that's unconventional -
       Jason Ong, @jasonong
    3. "5 Random Ruby Tips" - Justin Burris, @justinbburris, Neo Innovation
  - Ruby Tips: <https://github.com/justinbburris/slides/blob/master/pdf/001_5_ruby_tips.pdf>
    1. Quick Draw

            # Options Arguments
            def hash_args(options: {})
              options[:one_of_many]
            end

            # call
            hash_args one_of_many: "one of all",
                      the_underrated_one: "I'll never be returned"

            # Keyword Arguments
            def keyword_args(one_of_many: nil, the_underrated_one: nil)
              one_of_many
            end
            
            # call: same as above

    2. Reductionist: Map / Reduce.
      - Reduce can even do: [1, 2, 3].reduce(0, :+)
      - map/collect; reduce/inject
    3. The Expressive Regular
      - `/some_regex/`
      - `%r{http://mysite.com/some-other-regex}`
    4. The Exorcist
      - Daemonize: `Process.daemon`
      - Fork (with PID):
      
              if pid = fork
                File.write('/path/to/process.pid', pid)
                Process.detach(pid)
                exit
              end

    5. The Hired Guns
      - rubular ()
      - pry-remote
      - graphite
      - remark.js

- [Dec 16, 2014](<http://www.meetup.com/Singapore-Ruby-Group/events/218994458/>)
  - Meta
    - Venue: TinkerBox Studio
    - Sponsor:
      - Food & Drink: Jolly Good Code, PayrollHero
      - Venue: TinkerBox
    - This is just a gathering session 

- [Jan 27, 2015](<http://www.meetup.com/Singapore-Ruby-Group/events/219649764/>)
  - Meta
    - Venue: Microsoft Auditorium
    - Sponsor: ThoughtWorks
  - Talks
    1. Why I organise Rails Girls - Elisha Tan / @elishatan
    2. Winston Teo - TBC
    3. 5 Random Enumerators Tips - Grzegorz Witek / @arnvald
  - Random Ruby Tips

          # Tip 1
          ## Enumerator as external iterator

          e = [1,2].each
          e.next
          e.next
          e.next
          e.rewind
          e.next
          e.peek
          e.peek

          # Tip 2
          ## Creating enumerators

          [1,2].each
          [1,2].map

          [1,2].to_enum
          [1,2].to_enum :map

          Enumerator.new([1,2])

          Enumerator.new do |y|
            y << 1
            y << 20
            y << 55
          end


          # Tip 3
          ## chain enumerators

          (20..100).each_with_index { |el, i| puts el - i*3 }
          (20..100).each_with_index { |el, i| el - i*3 }

          res = []
          (20..100).each_with_index { |el, i| res << el - i*3 }
          res

          i = -1
          (20..100).map { |el| i += 1; res << el - i*3 }

          (20..100).map.each_with_index { |el, i| el - i*3 }


          # Tip 4
          ## lazy enumerators

          lucas = Enumerator.new do |yielder|
            a, b = 2, 1
            loop do
              yielder << a
              a, b = b, a + b
            end
          end

          lucas.entries
          lucas.entries.take(10)
          lucas.select { |x| x % 3 == 0 }.take(10)

          lazy_lucas = lucas.lazy { |x| x % 3 == 0 }
          lazy_lucas.take(10)
          lazy_lucas.take(10).entries


          # Tip 5
          ## making inject shorter
          'a'.upto('az').inject({}) { |acc, el| acc[el] = 5; acc }
          'a'.upto('az').inject({}) { |acc, el| acc[el] = 5 }

          1.upto(100).inject(0) { |acc, el| acc = acc + el }
          1.upto(100).inject(0) { |acc, el| acc += el }

          1.upto(100).inject { |acc, el| acc += el }
          1.upto(100).inject { |acc, el| acc.+(el) }

          1.upto(100).inject { |acc, el| acc.+(el) }
          1.upto(100).inject { |acc, el| acc.send(:+, el) }

          1.upto(100).inject(:+) => 
            a) 1.upto(100).inject { |acc, el| acc.send(:+, el) }
            b) 1.upto(100).inject { |acc, el| :+.to_proc.call(acc, el) }


          # Tip 5a
          using each_with_object instead of inject

- [Feb 24, 2015](<http://www.meetup.com/Singapore-Ruby-Group/events/220551234/>)
  - Meta
    - Venue: 6th Floor, Ocean Financial Centre, 10 Collyer Quay 
    - Sponsor:
      - PayrollHero
  - Talks
    1. Testing Shell Scripts - Bjorn Andersson / @gaqzi
    2. Development to Devops - Justin Burris / @justinbburris
    3. 5 Random Ruby Tips - Akira Hirakawa
  - Random Ruby Tips(<http://www.slideshare.net/akirahrkw/5-random-ruby-tips>)
    1. Levenshtein Distance: `'string'.levenshtein_distence('other_string')`
       (from a gem wrote by the presenter)
    2. Rails4.2 + jsonb
       - jsonb is binary, json is string
       - search is faster than json, storage size is bigger than json
    3. Protected Method: can be called with a receiver, but must be in
       inheritance hierarchy of the caller
    4. each: concurrently do each multi-array
    5. frozen constant

            module Code
              LANGUAGES = ['ruby', 'python', 'objc', 'swift'].map!(&:freeze).freeze
            end

- [March 24, 2015](<http://www.meetup.com/Singapore-Ruby-Group/events/220889894/>)
  - Meta
    - Venue: PayPal Singapore
    - Sponsor: Paypal
  - Talks
    1. Automating Tasks with Capybara in PayPal, Trung and Shipeng from PayPal
    2. Overcoming Inertia to Writing Tests, Ted from Tinkerbox
    3. 5 Random Ruby Tips, Michael Cheng from Neo
  - 5 Random Ruby Tips(<https://engineers.sg/video/5-random-ruby-tips-ruby-sg-meetup--50>)
    1. `a = Hash.new; a.default`
    2. AASM
    3. SitePrism (Page Objects)
    4. tmux + vim + vimux + vim-rspec
    5. Mountebank

- [April 29, 2015](<http://www.meetup.com/Singapore-Ruby-Group/events/221672947/>)
  - Meta
    - Venue: IDA Labs Level 2 @ National Design Centre
    - Sponsor: IDA
  - Talks
    1. "Open 'sesame' - The dangers of open-uri and remote code execution" Ted
       Johansson / @drenmi
    2. "Decorator in Ruby" Kevin Tran
    3. "5 Random Ruby Tips" Grzegorz Witek / @arnvald 
  - 5 Random Ruby Tips(<https://www.youtube.com/watch?v=5jW7BQDBTBs&feature=youtu.be>)
    1. Hash
            Hash.new(default_value)
            Hash.new('a', 1, 'k2', 2)
    2. Array
            Array.new(6, 'a')
            Array(1)  # [1]
            Array([1])  # [1]
            
            # How it works
            def Array(args)
              # it function as method
            end
    3. Class
            ClassName = Class.new(ParentClass)

    4. Struct.new(:login, :password)

            User = Struct.new(:login, :password)
            User == Struct

    5. Object
          
            module A; end
            o = Object.new
            o.extend A

            o.is_a? A       # true
            o.clone.is_a? A # true
            o.dup.is_a? A   # true

            Class.new(Object) # subclass of Object
            Class.new(Class)  # cannot


- [June 2, 2015](<http://www.meetup.com/Singapore-Ruby-Group/events/222588875/>)
  - Meta
    - Venue: IDA Labs Level 2 @ National Design Centre
    - Sponsor: Jolly Good Code
  - Talks
    1.  "Ruby MetaProgramming" - Song Yangyu
    2. "Mid Life Bliss: Switching careers to software development" - Jason Z. 
    3. 5 Random Ruby Tips - Juanito Fatas Huang 
  - Random Ruby Tips
    1. Circular Argument Reference Error:
    
            # <2.2.2: no problem at all
            def foo(foo = foo)
              foo
            end

    2. Regex
    
            %r{http://you/can/put/slash/here}

       Character Properties:

            # Construct:
            \p{Letter}
            
            # Mark
            \p{Mark}

            # Number
            \p{Mark}

            # Word
            \p{Word}

            # Symbol
            \p{Symbol}

            # Chinese
            \p{Han}

            # Korean
            \p{Hangul}

    3. Enumerbal

        users.sort { |a, b| a.balance <=> b.balance }
        users.sort_by &:balance

        # min_by
        users.sort_by(&:balance).take 3
        users.min_by 3, &:balance

    4. String

        # Concatenation
        "foo" + "bar"
        "foo".concat "bar"
        "foo" << "bar"
        "foo" "bar"

        Long String Literals: use back slash

    5. Meta Ruby Tips: 
      - stdlib docs
      - http://thepugautomatic.com/
      - http://idiosyncratic-ruby.com/
      - http://rubytapas.com/
      - http://parley.rubyrogues.com/


- [July 28, 2015](<http://www.meetup.com/Singapore-Ruby-Group/events/223737211/>)
  - Meta
    - Venue: Paypal
  - Talks
    1.  "Beyond the MVC: An Object Taxonomy for Rails" by Ted Johansson / @drenmi
    2. "Crystal Lang" by Grzegorz Witek @arnvald
    3. "5 different approaches to testing a remote API" by John Wilkinson. @jcwilk
  - Random Ruby Tips (on testing Remote API) <https://www.youtube.com/watch?v=px46T8qf94s>
    1. Stub all the things
    2. Mock HTTP: RestClient / WebMock
    3. Record/Replay: VCR
    4. Fake Server: ShamRack
    5. Shared Server

- [Aug 25, 2015](<http://www.meetup.com/Singapore-Ruby-Group/events/224558299/>)
  - Meta
    - Venue: Sandcrawler (IDA)
  - Talks
    1. "Material Design for Rails" - Sam Hon @kopisam
    3. "5 Random Ruby Tips" - Su Sheng Loong  `@code_ssl`
  - Ruby Tips <https://speakerdeck.com/sushengloong/5-random-ruby-tips>
    0. Rabbit: presentation tool, supports rd / markdown / hiki / Customizable 
       with themes
    1. `Enumerable#take_while` vs. `Enumerable#drop_while`
    2. ActiveRecord Validation Contexts -- when validation rule to be applicable

            class User < ActiveRecord::Base
              validates :username, length: {in: 8..20}, on: :context1
              validates :password, length: {in: 8..20}, on: [:context1, :context2]
            end
      
            user.valid? (:context)

    3. ActiveSupport Delegate

            class Person < ActiveRecord::Base
              belongs_to :household

              delegate :information, to: :household, prefix: true, allow_nil: true
            end

    4. `bundle install --local`, `bundle package --all`
    5. parallel tests: test in parallel on multiple CPUs

- [Sept 29, 2015](<http://www.meetup.com/Singapore-Ruby-Group/events/225030361/>)
  - Meta
    - Venue: IDA Labs
    - Sponsor: ReferralCandy
  - Talks
    1. "Dockerizing Rails and Zero Downtime Deployment" - Oliver Ponder from @giantswarm `@oliver_ponder`
    2. "I'd TaaP that" - Natalie Tay from NEO
    3. "5 Random Ruby Tips" - Huiming from @ReferralCandy @teohm
  - Talks: <https://speakerdeck.com/teohm/5-random-ruby-tips-sep-2015-srb-meetup> 
    1. ActiveRecord#update
            
            # option 1: check returned value 
            if model.update
            else
            end

            # option 2: rescue raised error:
            begin
              model.update!
            rescue
              # update failed
            end

    2. Open3#popen3 deadlock

            # would be deadlock if stderr have nothing and stdout have lots of
            # thigns
            Open3.popen3('run_cli_program') do |stdin, stdout, stderr, wait_thr|
              stderr.read
              stdout.read
            end

            # Open3#capture3
            out, err, status = Open3.capture3('run_cli_program')
            out[0]
            err[0]

    3. 1000 char limit per line in SMTP

            mail = Mail.new do
              html_part do
                # import, to resolve the 1000 char issue
                content_transfer_type 'quoted-printable'

                content_type  'text/html; charset=UTF-8'
                body html_email_content
              end
            end


    4. Fake service pattern in tests

            class Service
              def do_sth
                CustomerIO::Client.new.track(evt)
              end
            end

            module Fakes
              class CustomerIoClient
                attr_accessor :events

                def initialize
                  @tracks = []
                end

                def track(evt)
                  self.events << event
                end
              end
            end

            
            # In Rspec
            describe '#do_stuff' do
              let(:faker) {Fakes::CustomerIoClient.new}

              before do 
                allow(CustoemrIO::Client).to receive(:new) {faker}
              end

              it 'sends correct stuff' do
                service.do_stuff
                expect(faker.events).to include epected_event
              end
            end

    5. `include_examples` vs. `it_behaves_like`

- [Oct 20, 2015](<http://www.meetup.com/Singapore-Ruby-Group/events/225863617/>)
  - Meta
    - Venue: Paypal
    - Sponsor: Referral Candy
  - Talks
    1. "File Upload for 2015" - Choon Keat from @jollygoodcode
    2. "Virtual Reality E commerce with Rails and MetaRoom Markup" - Jia Hen from VRCollab
    3. "5 Random Ruby Tips" - Winston 
  - Random Ruby Tips: Not Found

    
- [Nov 24, 2015](<http://www.meetup.com/Singapore-Ruby-Group/events/226560278/>)
  - Meta
    - Venue: IDA Labs @ National Design Centre
    - Sponsor: Referral Candy
  - Talks
    1. "Things we learnt from IT Audit" - Bregadeesh, Luxola
    2. "First experience with Jenkins and Rails Engine" - Reuben
    3. "5 Random Ruby Tips"- Justin Louie, CTO GuavaPass.com
  - Random Ruby Tips: <http://files.meetup.com/3952812/GuavaPass%20-%205%20random%20ruby%20tips.pdf>

    1. `array.wrap` (from `active_support`)
    2. pluck
    3. skipping clalbacks the thread-safe way

            # thread-unsafe way
            some_guy = Person.new(who_is: "Justin Louie")
            Person.skip_callback(:validate, :block_embarrassing_photo)
            some_guy.post_embarrassing_photo # Takes 5 minutes
            Person.set_callback(:validate, :block_embarrassing_photo)

            # thread-safe way
            class Person
              attr_accessor :skip_block_embarrassing_photo

              def block_embarrassing_photo
                return true if @skip_block_embarassing_photo

                # ... amazing code to check for embarrassing photos
              end
            end

    4. Parallel gem

            Parallel.each((0..1000000), in_threads: 100) do |num_try|
              response = HTTParty.get("http://www.lazada.sg/ajax/lottery/spinTheWheel...")
              # do something response.body ... like look for the category that has the voucher
            end

    5.iTerm2:
      Load URLs: CMD + Click
      Jump to Position in String: Option + Click (note: this does not work on my local)


- [Dec 22, 2015](<http://www.meetup.com/Singapore-Ruby-Group/events/227104474/>)
  - Meta
    - Venue: Tinkerbox Studio
    - Sponsor:
      - Referral Candy
      - HIREd
    - Topic: Merry Ruby Christmas!

- [Jan 26, 2016](<http://www.meetup.com/Singapore-Ruby-Group/events/227882567/>)
  - Meta
    - Venue: Paypal
  - Talks
    1. "Slaying the Dragon: A Guide to Implementing Your Own Programming Language
       in Ruby" - @jasonyeojs from @srcclr
    2. "Ruby and MS DOS: Extracting data from a 35-year old system for current
       use" - @raoulalwani from lachmann
    3. "5 Random Ruby Tips" - @drenmi from @tinkerbox
    4. "5 numbers on the SG Ruby community"  - Sayanee @webuildsg
    5. Open Source Hot Issues (Back by popular demand :P) 
  - 5 Random Ruby Tips <https://engineers.sg/video/5-random-ruby-tips-rubysg--501>
    1. Freeze / Unfree

            foo = "bar"
            -foo # freezed version 
            +foo # unfreezed version

    2. Freeze Object
    3. Implicit `#to_proc` invocation when `&`
    4. Kernal `type casting`: `Array / Complex / Float / Hash / Integer / Rational / String`
    5. Heredoc: `<<-` , removes
    
            
- [Feb 23, 2016](<http://www.meetup.com/Singapore-Ruby-Group/events/228396335/>)
  - Meta
    - Venue: The Hub
    - Sponsor: HIREd
  - Talks
    1. "What you should know about the $ENVIRONMENT" - Bjorn Anderson, Neo 
    2.  "The simplest gem you'll ever use" - Grzegorz Witek, Kaligo 
    3. "5 Random Ruby Tips", Guo Xiang
  - Random Ruby Tips <https://engineers.sg/video/5-random-ruby-tips-singapore-ruby-group--544>
    1. `Object#send`
    2. `Hash#to_proc`
    3. `active_record/connection_adapters/postgresql_adapter` -- fallback
    4. Integer#positive?  #negative?
    5. in Rails: `Array#second_to_last`, `Array#third_to_last`, `#forty_two`

- [March 29, 2016](<http://www.meetup.com/Singapore-Ruby-Group/events/229502298/>)
  - Meta
    - Venue: Honestbee
    - Sponsor: PocketMath
  - Talks
    1. "Continuous Update" by @winstonyw from @jollygoodcode 
    2. "Enterprise Integration with Ruby" by @code_ssl from IDA   
    3. "Make your Rails console awesome" by @ascendbruce from HonestBee
    4. "5 Random Ruby Tips" by Wei Liang from @tinkerbox
  - Random Ruby Tips
    1. || / &&
    2. `and / or`
    3. safe navigation operator (Ruby 2.3):
      - `rubyist.pizzas.try(:first).try(:stelal)`
      - `nil&.nonexsit_mehod`
    4. `String#grep_v` to get the non matches
    5. Chunk on Enumerable
      - `[1, 2, 2, 2, 3, 1, 2, 6, 7].chunk(&:even?)`, e
- [Apirl 26, 2016](<http://www.meetup.com/Singapore-Ruby-Group/events/229502298/>)
  - Meta
    - Venue: Carousell, 71 Ayer Rajah Crescent
    - Sponsor: Carousell
  - Talks
    1. "Docker and Ruby Development" by Soedar from Ministry of Education  
    2.  "Superlogger - Custom Logging for Rails" by Yu Ming from Ministry of
        Education
    3. "5 Random Ruby Tips" by @tgxworld from @discourse
  - Random Ruby Tips
    1. `rack-mini-profiler`, and use it in production
    2. Uglifying and Gzippingin Ruby is slow
    3. `fast_blank`
    4. `Object#try` is 4 times slower than `&.`
    5. derails benchmark


- [May 31, 2016](<http://www.meetup.com/Singapore-Ruby-Group/events/229502298/>)
  - Meta
    - Venue: Grab
  - Talks
    1. "Rails + Postgres Cubes" - Mohammad Habbab from @tradegecko
    2. "Features that shouldn't be" - @arnvald from @kaligohotels
    3. "Performance tips for a Rails stack" - Althaf Hameez from @GrabSG
    4. "5 Random Ruby Tips" - Song Yangyu
