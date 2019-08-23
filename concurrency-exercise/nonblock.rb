def prepare_order_async(order)
    Thread.start do
        sleep rand(3)
        puts "#{order} ready" 
    end
end

while true
    puts "Enter your order: "
    order = gets.chomp
    prepare_order_async(order)
end
