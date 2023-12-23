import ProductCard from "../../components/ProductCard/ProductCard"
import ProductSidebar from "../../components/ProductSidebar/ProductSidebar"

const Product = () => {
    return (
        <section className="grid grid-cols-4 gap-8 ">
            <div className="col-span-1 sticky top-0 h-screen overflow-y-auto bg-green-100 rounded-lg">
               <ProductSidebar/>
            </div>
            <div className="col-span-3 grid grid-cols-3 gap-5">
               
                {
                    [1, 1, 1, 11,1,1,1,1,1,1,1,1,].map((product, index) => <ProductCard key={index} />)
                }
            </div>

        </section>
    )
}

export default Product