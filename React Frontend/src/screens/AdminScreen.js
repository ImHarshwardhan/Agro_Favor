import Header from '../components/Header'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import { useSelector } from 'react-redux'
const AdminScreen = (props) => {

    
    const userSignin = useSelector((store) => store.userSignin)
    const { response } = userSignin
    const onAddCategory = () => {
        props.history.push('/category')
      }
    return(
        <div>    
        <h1> <center>Hello {response && response.name} !!!</center></h1>
        <Link to="/add_product">
        <button className="btn btn-success button-space" >Add Product</button>
        </Link>
        {/* <Link to="/category"> */}
        <button onClick={onAddCategory} className="btn btn-success button-space">Categories</button>
        {/* </Link> */}
        <Link to="/products">
        <button className="btn btn-success button-space">Products</button>
        </Link>
        <Link to="/registration-supplier">
        <button className="btn btn-success button-space">Add Supplier</button>
        </Link>
    </div>
    )
}


export default AdminScreen