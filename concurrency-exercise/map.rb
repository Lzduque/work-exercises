def map(list, &block)
    new_list = []
    list.each { |e| new_list << block.call(e) }
    new_list
end

# doubled = map((1..ARGV[0].to_i)) do |n|
#     print "."
#     # sleep 0.2
#     n * 2
# end

# p doubled

def pmap(list, &block)
    new_list = []
    threads = []

    list.each do |e|
        threads << Thread.new { new_list <<  block.call(e) }
    end
    threads.each { |t| t.join }
    new_list
end

doubled = pmap((1..ARGV[0].to_i)) do |n|
    print "."
    # sleep 0.2
    n * 2
end
