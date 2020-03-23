import React, {useState,useEffect}from 'react';
import { Header, Segment, Grid, Container,Select,Table} from 'semantic-ui-react'
import Nav from '../layouts/nav';

const Qsql = (props) => {
    const [file, setFiles] = useState({
        data:JSON.parse(localStorage.getItem('dataXlsx')),
        value:null
    });
    let tablesData=[];

    const [tables, setTables] = useState([]);
    const getTables = () =>{
        file.data.forEach(e => {
            tablesData.push({
                key: e.hoja, value: e.hoja, text: e.hoja
            })
            setTables(tablesData);
        });  
    }

    const handleTableChange = (e,{value}) =>{
        let Head=[];
        let Body=[];
        file.data.forEach(e => {
            if (e.hoja === value) {
                e.cols.forEach(col =>{             
                    Head.push(col);
                });
                e.data.forEach(row =>{      
                    console.log(JSON.stringify(row));       
                    Body.push(row);
                });
            }
        }); 


        setHeads(Head);
        setCols(Body)
    }
    const [heads, setHeads] = useState([]);
    const tableHead = () =>{
        return(
            heads.map((head)=>(                
                <Table.HeaderCell>{head}</Table.HeaderCell>
            )) 
            
        )
    }
    const [cols, setCols] = useState([]);
    const tableCols = () =>{
        
        return(
            
            cols.map((col)=>(                
                <Table.Cell>{col}</Table.Cell>
            )) 
            
        )
    }

    useEffect(() => {
        getTables();
    }, []);
    return(
        <Container>
            <br></br>
            <Grid>
                <Nav></Nav>
                <Grid.Column  width={12} >
                    <Header as='h2' icon='settings' content='Crear tu Insert SQL' attached='top'/>
                    <Segment attached>
                        <Select placeholder='Tablas' options={tables} onChange={handleTableChange}/>  
                         
                        <Table singleLine >
                            <Table.Header>
                            <Table.Row>
                                {tableHead()}
                            </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Segment>
                </Grid.Column>
            </Grid>
        </Container>
        
    );
}
export default Qsql;