def get_title(args)
  if args.title == nil then
    puts 'Error, title is empty!'
    exit 1
  end
  
  title = args.title
end

desc 'Create a post'
task :post, [:title, :category] do |t, args|
  args.with_defaults(category: 'uncategorized')

  title = get_title(args)
  category = args.category

  date = Time.new.strftime('%Y-%m-%d')
  slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/,'')

  filename = File.join('_posts', "#{date}-#{slug}.md")

  open(filename, 'w') do |post|
    post.puts '---'
    post.puts 'layout: post'
    post.puts "title: \"#{title.gsub(/-/, ' ')}\""
    post.puts "category: \"#{category.gsub(/-/, ' ')}\""
    post.puts '---'
    post.puts "\n"
  end

  puts "post created at: #{filename}"
end

desc 'Create a page'
task :page, [:title] do |t, args|
  title = get_title(args)
  slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/,'')

  # post don't need date
  filename = File.join('pages', "#{slug}.md")

  open(filename, 'w') do |post|
    post.puts '---'
    post.puts 'layout: page'
    post.puts "title: \"#{title.gsub(/-/, ' ')}\""
    post.puts '---'
    post.puts "\n"
  end

  puts "page created at: #{filename}"
end
