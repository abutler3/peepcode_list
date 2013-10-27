desc "import video data from peepcode"
task :import => :environment do
  Screencast.all.each do |sc|
    Video.create(sc)
  end
  # Use rake task to tell gem to populate database
  # type rake import
end
