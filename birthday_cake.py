"""
  
This question is asked by Amazon. You are at a birthday party and are asked to distribute cake to your guests. Each guess is only satisfied if the size of the piece of cake they’re given, matches their appetite (i.e. is greater than or equal to their appetite). Given two arrays, appetite and cake where the ithelement of appetite represents the ith guest’s appetite, and the elements of cake represents the sizes of cake you have to distribute, return the maximum number of guests that you can satisfy.

Ex: Given the following arrays appetite and cake…

appetite = [1, 2, 3], cake = [1, 2, 3], return 3.
Ex: Given the following arrays appetite and cake…

appetite = [3, 4, 5], cake = [2], return 0.
  
"""

def bin_search(appetite, cakes, eaten):
  left, right = 0, len(cakes) - 1

  smallest_cake_idx = -1

  while left <= right:
    mid = (left + right) // 2

    if cakes[mid] >= appetite and not eaten[mid]:
      smallest_cake_idx = mid
      right = mid - 1
    
    else:
      left = mid + 1

  return smallest_cake_idx


def distribute_cake(appetites, cakes):

  appetites.sort()
  cakes.sort()
  eaten = [False] * len(cakes)
  satisfied_guests = 0

  for appetite in appetites:
    idx = bin_search(appetite, cakes, eaten)

    if idx != -1:
      eaten[idx] = True
      satisfied_guests += 1

  return satisfied_guests


additional_test_cases = [
    ([1, 2, 3], [1, 2, 3], 3),  # Reversed cake sizes
    ([3, 4, 5], [4, 5, 6], 3),  # Cake sizes too small for any guest
    ([3, 3, 3], [1, 2, 3], 1),  # Equal cake sizes
    ([1, 1, 1], [1, 2, 3], 3),  # Smallest cake size possible
    ([5, 5, 5], [5, 5, 5], 3),  # All guests have same appetite and cake size
    ([6, 10, 14], [5, 10, 15], 2),  # Closest cake sizes
    ([1, 1, 1, 10], [1, 1, 1, 10], 4),  # One guest with a much larger appetite
    ([1, 1, 3], [1, 1, 3], 3),  # Closest sizes to satisfy maximum guests
    ([1, 3, 3], [1, 2, 3], 2),  # Some guests receive larger than their appetite
    ([1, 1, 1], [1, 1, 1], 3)  # Cake sizes too small for any guest
]

complicated_test_cases = [
    ([5, 7, 9, 11], [6, 8, 10, 12], 4),  # Each guest can be satisfied with the next size of cake
    ([1, 2, 3, 4], [2, 3, 4, 5, 6, 7], 4),  # Each guest can be satisfied with multiple cake sizes
    ([5, 10, 15, 20], [5, 15, 25, 35], 4),  # Some guests cannot be satisfied
    ([5, 10, 15, 20, 25], [5, 10, 15, 20, 25], 5),  # Guests have increasing appetites
    ([1, 2, 3], [1, 2, 3, 4, 5], 3),  # Smallest cake size is not sufficient for all guests
    ([1, 2, 3], [1, 2, 3, 4, 5, 6], 3),  # More cakes than guests
    ([10, 10, 10], [5, 5, 5, 10, 10, 10], 3),  # Some cakes are already partially eaten
    ([2, 4, 6, 8, 10], [1, 2, 3, 4, 5], 2)  # Different sized cakes
]



print(distribute_cake(appetites=[1, 2, 3], cakes=[1, 2, 3]), 3)
print(distribute_cake(appetites=[3, 4, 5], cakes=[2]), 0)

for a, c, res in additional_test_cases + complicated_test_cases:
    print(distribute_cake(appetites=a, cakes=c), res)
