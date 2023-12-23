import ProductCard from "../../components/ProductCard/ProductCard"
import ProductSidebar from "../../components/ProductSidebar/ProductSidebar"
import Spinners from "../../components/Spinner/Spinner"
import { useGetAllProductsQuery } from "../../redux/api/productApi"

const Product = () => {

    const {data,isLoading} =useGetAllProductsQuery()

    if(isLoading){
        return <Spinners/>
    }

    return (
        <section className="grid grid-cols-4 gap-8 ">
            <div className="col-span-1 sticky top-0 h-screen overflow-y-auto bg-green-100 rounded-lg">
               <ProductSidebar/>
            </div>
            <div className="col-span-3 grid grid-cols-3 gap-5">
               
                {
                   data?.data?.map((product, index) => <ProductCard key={index} product={product} />)
                }
            </div>

        </section>
    )
}

export default Product