input1 = "idontknowwhatimdoing"
input2 = "capricia"
input3 = "sixfigures"

def reverse_string(string)
  reversed_string = ""

  (string.length - 1).downto(0) do |i|
    reversed_string += string[i]
  end
  
  return reversed_string
end

puts reverse_string(input1)
puts reverse_string(input2)
puts reverse_string(input3)
