def to_piglatin(string)
  string.gsub(/\b(\w)(\S+)\b/, '\2\1ay')
end

def capitalize(string)
  lowercase_string = string.downcase
  return string if string === lowercase_string
  lowercase_string.capitalize
end

phrase = ARGV[0];
puts "English Phrase: #{phrase}"
word_array = to_piglatin(String(phrase)).split(' ')
final_array = []
word_array.each do |string|
  final_array.push(capitalize(string))
end
puts "Pig Latin: #{final_array.join(' ')}"
