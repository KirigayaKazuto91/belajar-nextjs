import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "Product 1",
    price: 1000,
  },
  {
    id: 2,
    name: "Product 2",
    price: 2000,
  },
  {
    id: 3,
    name: "Product 3",
    price: 3000,
  },
  {
    id: 4,
    name: "Product 4",
    price: 4000,
  },
  {
    id: 5,
    name: "Product 5",
    price: 5000,
  },
];
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.nextUrl);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = data.find((product) => product.id === parseInt(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  return NextResponse.json({ status: 200, message: "success", data });
}
