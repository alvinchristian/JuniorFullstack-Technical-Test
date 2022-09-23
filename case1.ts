type IFruit = {
	fruitId: number;
	fruitName: string;
	fruitType: "IMPORT" | "LOCAL" | "CAMPURAN";
	stock: number;
};

const fruits: IFruit[] = [
	{
		fruitId: 1,
		fruitName: "Apel",
		fruitType: "IMPORT",
		stock: 10,
	},
	{
		fruitId: 2,
		fruitName: "Kurma",
		fruitType: "IMPORT",
		stock: 20,
	},
	{
		fruitId: 3,
		fruitName: "apel",
		fruitType: "IMPORT",
		stock: 50,
	},
	{
		fruitId: 4,
		fruitName: "Manggis",
		fruitType: "LOCAL",
		stock: 100,
	},
	{
		fruitId: 5,
		fruitName: "Jeruk Bali",
		fruitType: "LOCAL",
		stock: 10,
	},
	{
		fruitId: 5,
		fruitName: "KURMA",
		fruitType: "IMPORT",
		stock: 20,
	},
	{
		fruitId: 5,
		fruitName: "Salak",
		fruitType: "LOCAL",
		stock: 150,
	},
	{
		fruitId: 6,
		fruitName: "Nangka",
		fruitType: "CAMPURAN",
		stock: 100,
	},
];

// 1
const filterFruitsName = (fruits: IFruit[]) => [...new Set(fruits.map((fruit) => fruit.fruitName.toLocaleLowerCase()))];
console.log(filterFruitsName(fruits));

// 2
let fruitTypes: string[] = [];
fruitTypes = [...new Set(fruits.map((fruit) => fruit.fruitType))];
console.log(fruitTypes.length, fruitTypes);

// 2 & 3
const fruitAndStockByTypes = (fruitType: string) => {
	let fruitsFilter = fruits.filter((fruit) => fruit.fruitType === fruitType);
	let totalStock: number = 0;
	fruitsFilter.forEach((fruit) => (totalStock += fruit.stock));
	console.log(fruitType, filterFruitsName(fruitsFilter), totalStock);
};

fruitTypes.forEach((fruitType) => fruitAndStockByTypes(fruitType));

// 4
// fruitId ada yang sama (id atau key seharusnya unique)
// penulisan fruitName tidak konsisten (huruf besar dan kecil)
// Data ada yang sama (duplicate data hanya berbeda penulisan)
