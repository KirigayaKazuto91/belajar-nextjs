type Props = { params: { slug: string[] } };

export default function DetailProductPage(props: Props) {
  const { params } = props;
  console.log(params);
  return (
    <>
      <h1>{params.slug ? "Detail Product Page" : "Product Page"}</h1>
      {params.slug ? (
        params.slug.map((product) => <p key={product}>{product}</p>)
      ) : (
        <p>Product not found</p>
      )}
    </>
  );
}
