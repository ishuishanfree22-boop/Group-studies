# javascript and classes

## OOP - object orianted programming

## object
- collection of properties and methods
- toLOwerCase

## why use OOP

## part of OOP
Object literal

- constructor function
- prototype
- classes
- instances(new, this)


## 4 pillars
### abstraction
---
- used to protect data from unwanted change
- access is controlled
 - (privet, public, protected)
```c++
class Student {
private:
    int marks;

public:
    void setMarks(int m) {
        marks = m;
    }
    int getMarks() {
        return marks;
    }
};
```

### endcapsulation
---
- showing only essential data
- focus on what object does not how it does it.
```java
abstract class Shape {
    abstract void draw();
}
```
### inheritance
---
- One class acquires properties and behavior of another class.
- parent(BASE) and child (derived) classes
- support resusability
```c++
class Animal {
public:
    void eat() {
        cout << "Eating";
    }
};

class Dog : public Animal {
};
```
### polymorphism
---
- one function can behave diffrently according to the situation
- same function name diffrent implementations.

> types
1. compile-time (function overloading)
2. runtime (function overriding)
- support dynamic behavior
```c++
void add(int a, int b) {
    cout << a + b;
}

void add(int a, int b, int c) {
    cout << a + b + c;
}
```