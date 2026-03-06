class Calculator:
    def __init__(self):
        self.history = []

    def add(self, x, y):
        result = x + y
        self.history.append(f"{x} + {y} = {result}")
        return result

    def subtract(self, x, y):
        result = x - y
        self.history.append(f"{x} - {y} = {result}")
        return result

    def multiply(self, x, y):
        result = x * y
        self.history.append(f"{x} * {y} = {result}")
        return result

    def divide(self, x, y):
        if y == 0:
            return "Error: Division by zero"
        result = x / y
        self.history.append(f"{x} / {y} = {result}")
        return result

    def square_root(self, x):
        if x < 0:
            return "Error: Cannot take square root of a negative number"
        result = x ** 0.5
        self.history.append(f"sqrt({x}) = {result}")
        return result

    def exponent(self, base, exp):
        result = base ** exp
        self.history.append(f"{base} ^ {exp} = {result}")
        return result

    def get_history(self):
        return self.history

# Example usage
if __name__ == '__main__':
    calc = Calculator()
    print(calc.add(5, 3))  # Output: 8
    print(calc.subtract(10, 4))  # Output: 6
    print(calc.multiply(2, 6))  # Output: 12
    print(calc.divide(8, 2))  # Output: 4.0
    print(calc.square_root(16))  # Output: 4.0
    print(calc.exponent(2, 3))  # Output: 8
    print(calc.get_history())