module StringExtensions
  def repeatify(times)
    str = ''
    for i in 1..times do
      i += 1
      str += self
    end
    str
  end
end

class String
  include StringExtensions
end

puts "Hello".repeatify(3)
