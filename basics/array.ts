//when declaring the array type is can not be empty otherwise it assumes you want an empty array.

const emptyArr : [] = [];

//we can declare the type of array 2 ways brackets and a special way

//brackets
const numArr : number[] = [1,2,3,4]

const stringArr : Array<string> = ["Dallas can code"]


//we can use a declared type to define an arrays type as well 
type point ={
    x:number;
    y:number;
};

const pointArr : point[] = [{x:33,y:33}, {x:55,y:66}]

//for an array of arrays aka a 2d or 3d array we just double down on the brakcet

const twoDArr: number[][] = [[1,2,3],[3,4,5]]