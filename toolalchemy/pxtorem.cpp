#include <iostream>
#include <iomanip>

double pxToRem(int pxValue, int baseFontSize = 16) {
    return static_cast<double>(pxValue) / baseFontSize;
}

int main() {
    int pxValue;
    int baseFontSize = 16; // Default base font size in pixels

    std::cout << "Enter pixel value: ";
    std::cin >> pxValue;

    double remValue = pxToRem(pxValue, baseFontSize);
    std::cout << std::fixed << std::setprecision(2);
    std::cout << pxValue << "px is equal to " << remValue << "rem" << std::endl;

    return 0;
}
