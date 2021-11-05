import React from 'react';
import { Badge, Card, CardBody, CardHeader,  Col,  Pagination,   PaginationItem,
    PaginationLink,   Row,  Table } from 'reactstrap';
import axios from 'axios';
import { useState, useEffect} from 'react'

function ListProduto(props){
    const [data, setData] = useState([]); 

    useEffect(() => {
        const GetData = async () => {
             const result = await axios('https://localhost:44355/api/Produtos');
             setData(result.data); 
        };
        GetData();
    }, []); 

    return (
        <div className="animated fadeIn">
            <Row>
                <Col>
                    <Card>
                          <CardHeader>
                              <i className="fa fa-align-justify">Lista de Produtos</i>
                          </CardHeader>
                          <CardBody>    
                              <table>
                                  <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Descrição</th>
                                        <th>Unidade</th>
                                        <th>Quantidade</th>
                                        <th>Valor</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                      {
                                          data.map((item,idx)=>{
                                              return
                                                  <tr>
                                                      <td>{item.id}</td>
                                                      <td>{item.descricao}</td>
                                                      <td>{item.unidade}</td>
                                                      <td>{item.quantidade}</td>
                                                      <td>{item.valor}</td>
                                                  </tr>
                                          })
                                      }
                                  </tbody>
                              </table>

                          </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )

}

export default ListProduto; 