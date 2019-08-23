# concurrency -> doing more than one thing at the same time
# processes can't share the same memory, threads can point to the same memory

t = Thread.start do
    puts "My first thread!"
end

threads = []
10.times do |i|
    threads << Thread.new { puts "thread #{i}" }
end

# sleep 1
t.join

threads.each { |thread| thread.join }