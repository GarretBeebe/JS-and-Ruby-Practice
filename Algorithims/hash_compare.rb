hash_one = {"apples" => 6, "oranges" => {"strawberries" => 2, "kiwis" => 1}, "tangerines" => 4}
hash_two = {"apples" => 3, "lemons" => 1, "oranges" => {"strawberries" => 10, "kiwis" => 12}}

def compare (hash1, hash2)
  hash1.each do |key1, val1|
    (puts "#{key1} is not in hash2"; next) unless hash2.key?(key1)
    hash2.each do |key2, val2|
      (puts "#{key2} is not in hash1"; next) unless hash1.key?(key2)
      compare_key_values(key1, val1, key2, val2)
    end
  end
end

def compare_key_values(key1, val1, key2, val2)
  if (key1 == key2) then
    if (val1.is_a?(Integer) && val2.is_a?(Integer)) && val1 != val2 then
      puts "Hash1 #{key1} is #{val1} and Hash2 #{key2} is #{val2}"
    elsif val1.is_a?(Hash) && val2.is_a?(Hash) then
      compare(val1, val2)
    else 
      puts "Hash1 #{key1} is a #{val1.istance_of?} and Hash2 #{key2} is a #{val2.intance_of?}#"
    end
  end
end

compare(hash_one, hash_two)
