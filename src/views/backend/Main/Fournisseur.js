import  React from 'react'
import {Container,Row,Col,Form,Button,OverlayTrigger,Tooltip} from 'react-bootstrap'
import  Card from '../../../components/Card'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'

const Fournisseur = () => {
    const [fournisseurs,setFournisseurs] = React.useState([])
    const history = useHistory()

    //get all fournisseurs
    const getFournisseurs = async () => {
        const res = await axios.get('http://localhost:8099/fournisseurs/getAllFournisseur').then(res => {
            setFournisseurs(res.data)
            console.log(res.data)
        })
    }

    //delete fournisseur
    const deleteFournisseur = async (id) => {
        await axios.delete(`http://localhost:8099/fournisseurs/${id}`)
        window.location.reload()
    }

    const handleDelete = (id) => {
        window.confirm('Are you sure you want to delete this fournisseur?') && deleteFournisseur(id)
       
    }

    React.useEffect(() => {
        getFournisseurs()
    },[])

    return (
        <>
             <Container fluid>
            <Row>
                <Col lg="12">
                    <div className="d-flex flex-wrap align-items-center justify-content-between my-schedule mb-4">
                       <div className="d-flex align-items-center justify-content-between">
                            <h4 className="font-weight-bold">Fournisseur</h4>
                        </div>  
                        <div className="create-workform">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <div className="modal-product-search d-flex">
                                    <Form className="mr-3 position-relative">
                                        <Form.Group className="mb-0">
                                        <Form.Control type="text" className="form-control" id="exampleInputText" placeholder="Search Fournisseur"/>
                                        <Link to="#" className="search-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </Link>
                                        </Form.Group>
                                    </Form>
                                    <Link to="/Fournisseur-add" className="btn btn-primary position-relative d-flex align-items-center justify-content-between">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Add Fournisseur
                                    </Link>
                                </div>                            
                            </div>
                        </div>                    
                    </div>                
                    <Row>
                        <Col lg="12">
                            <Card className="card-block card-stretch">
                                <Card.Body className="p-0">
                                    <div className="d-flex justify-content-between align-items-center p-3">
                                        <h5 className="font-weight-bold">Fournisseur List</h5>
                                        <Button variant="btn btn-secondary btn-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            Export
                                        </Button>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table data-table mb-0">
                                            <thead className="table-color-heading">
                                                <tr className="">
                                                    <th scope="col" className="pr-0 w-01">
                                                        <div className="d-flex justify-content-start align-items-end mb-1 ">
                                                            <div className="custom-control custom-checkbox custom-control-inline">
                                                                <input type="checkbox" className="custom-control-input m-0" id="customCheck1"/>
                                                                <label className="custom-control-label" htmlFor="customCheck1"></label>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <th scope="col">
                                                        Id fournisseur
                                                    </th>
                                                    <th scope="col">
                                                        Nom Prenom
                                                    </th>
                                                    <th scope="col">
                                                        Email
                                                    </th>
                                                    
                                                    <th scope="col" className="text-right"> 
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    fournisseurs.map( (item) => (
                                                    <tr key={item.des} className="white-space-no-wrap">
                                                    
                                                    <td className="pr-0 ">
                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input m-0" id="customCheck"/>
                                                        <label className="custom-control-label" htmlFor="customCheck"></label>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {item.idFournisseur}
                                                    </td>
                                                    <td className="">
                                                        <div className="active-project-1 d-flex align-items-center mt-0 ">
                                                            
                                                            <div className="data-content">
                                                                <div>
                                                                <span className="font-weight-bold">{item.nom}</span>                           
                                                                </div>
                                                                <p className="m-0 text-secondary small">
                                                                {item.prenom}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{item.email}</td>
                                                    
                                                                                                   
                                                    <td>
                                                        <div className="d-flex justify-content-end align-items-center">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>} >
                                                                <Link className="" to={'/Fournisseur-view/'+item.idFournisseur}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                                    </svg>
                                                                </Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>} >
                                                                <Link className="" to={'/Fournisseur-edit/'+item.idFournisseur} >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary mx-4" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                    </svg>
                                                                </Link> 
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>} >
                                                                <Link className="badge bg-danger" onClick={() => handleDelete(item.idFournisseur)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                    </svg>
                                                                </Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </td>
                                                </tr>
                                                ))

                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Fournisseur;