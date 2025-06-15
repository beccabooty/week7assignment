import { findMaxValue, factorial, areArraysEqual, toTitleCase } from "./app";
import { test,describe, expect} from "vitest";

describe ("findMaxValueTests", function(){
    test("test1max", function(){
        expect(findMaxValue([3,7,2,8,5])).toBe(8);
    });
});

describe ("factorialTests", function(){
    test("test1factorial", function(){
        expect(factorial(5)).toBe(120);
    });
});

describe ("areArraysEqualTests",function(){
    test("areArraysEqual1test", function(){
        expect(areArraysEqual([1,2,3],[3,2,1])).toBe(false);
    });
});

describe("toTitleCaseTests", function(){
    test("TitleCaseTest1", function(){
        expect(toTitleCase("hello becca")).toBe("Hello Becca");
    });
});