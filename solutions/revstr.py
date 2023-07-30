#reverse a string
def reverse_string(string):
    reversed_string = ""
    for i in range(len(string) - 1, -1, -1):
        reversed_string += string[i]
    return reversed_string

input1 = "idontknowwhatimdoing"
input2 = "capricia"
input3 = "sixfigures"

print(reverse_string(input1))
print(reverse_string(input2))
print(reverse_string(input3))