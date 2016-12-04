finalArray = [];
phrase = '';
wordArray = [];

def toPigLatin(str)
  str.gsub(/\b(\w)(\S+)\b/, '\2\1ay')
end

def capitalize(str)
  return str unless !(str === str.downcase)
  str.downcase.capitalize
end

phrase = ARGV[0];
puts "English Phrase: #{phrase}";
wordArray = toPigLatin(String(phrase)).split(' ');
wordArray.each do |str|
  finalArray.push(capitalize(str));
end
puts "Pig Latin: #{finalArray.join(' ')}";
