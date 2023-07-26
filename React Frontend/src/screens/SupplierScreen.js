import Header from '../components/Header'
import {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { getCurrOrderBySupplier, getProductsbySupplier } from "../actions/productAction";
import { getProducts,getSingleProduct } from "../actions/productAction";
import { getSingleOrder } from "../actions/orderAction";
import axios from 'axios'

const SupplierScreen = (props) => {
    const dispatch = useDispatch();
    const supplierProducts = useSelector((store) => store.supplierFetchProduct);
    const { error, response : productResponse, loading } = supplierProducts;
    const supplierCurrentOrders = useSelector((store) => store.supplierFetchCurrentOrders)
    const { error : currOrder , response : currOrderResponse, loading : currOrderLoading } =supplierCurrentOrders
    const orderDetails = useSelector((store) => store.fetchSingleOrder)
    const { error : orderDetailsError, response : orderResponse  , loading : orderDetailsLaoading } =orderDetails

    const userSignin = useSelector((store) => store.userSignin)
    const { name, id } = userSignin
    const [username, setUsername] = useState(name)
    const [supplierId, setid] = useState(id)

    useEffect(() => {
        dispatch(getProductsbySupplier(supplierId));
        dispatch(getCurrOrderBySupplier(supplierId));
        
      }, []);
    
      useEffect(() => {}, [error, productResponse,currOrderResponse,loading]);
    

      const onEdit = (productId) => {
        dispatch(getSingleProduct(productId))
        props.history.push('/update_product')
      }
    
      const onDelete = (productId) => {
        const header = {
          headers: {
            'Content-Type': 'application/json',
            token: sessionStorage['token'],
          },
        }
        const url = 'http://localhost:8080/products/remove_product/'+productId
          axios
            .delete(url, header)
            .then((response) => {
              dispatch(getProductsbySupplier(supplierId))
                console.log(response.status)
              })
            .catch((error) => {
              alert("error in calling APT : "+error)
            })
            
      }


    return(
        <div>    
                
        <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Products</button>
            <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Orders</button>
        </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <Header title="Welcome Supplier "></Header>
            <h5>Hello {username}  id : {supplierId} </h5>   
            </div>

            {/* products display  */}
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <table className="table table-striped">
          <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Weight</th>
            <th>Stock</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productResponse &&
            productResponse.map((product) => {
              return (
                <tr>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.weight}</td>
                  <td>{product.stock}</td>
                  {/* <td>{product.category.name}</td> */}
                  <td>{product.image}</td>
                  <td>
                    <button onClick={() => onEdit(product.id)}  className="btn btn-primary "> Edit  </button>
                    <button onClick={() => onDelete(product.id)}  className="btn btn-danger "> Delete </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Link to="/add_product">
        <button className="btn btn-success " >Add Product</button>
        </Link>
    </div>

        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
        <table className="table table-striped">
        <thead>
          <tr>
            <th>OrderItemId</th>
            <th>ProductId</th>
            <th>Quantity</th>
            <th>Action</th>
           
          </tr>
        </thead>
        <tbody>
          {currOrderResponse &&
            currOrderResponse.map((orderItem) => {
              return (
                <tr>
                  <td>{orderItem.id}</td>
                  <td>{orderItem.product.id}</td>
                  <td>{orderItem.quantity}</td>
           
                  <td>
                    <Link to="/process-order" className="signup-color">
                   <button onClick={() =>{ sessionStorage.setItem('orderItem', JSON.stringify(orderItem))}} 
                    className="btn btn-success ">Process Order</button>
                   </Link> </td>
               
                </tr>
              );
            })}
        </tbody>
      </table>
                       
        </div>

            
        </div>              
        
    </div>
    )
}


export default SupplierScreen