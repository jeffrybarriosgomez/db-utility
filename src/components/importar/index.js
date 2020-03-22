import React, {useState,useEffect} from 'react';
import { Input,Button, Icon, Label,Container,Header } from 'semantic-ui-react'

import { InputFile } from 'semantic-ui-react-input-file'
import * as xlsx from 'xlsx';

const Importar = () => {
    const [file, setFile] = useState([]);

    useEffect(() => {
    }, []);

    const handleUpload = (e) =>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(name);
        setFile({
            ...file,
            [name]:value
        });
        let hojas = [];
        if (name === 'importar') {
            let render = new FileReader();
            render.readAsArrayBuffer(target.files[0]);
            render.onloadend = (e) => {
                let data = new Uint8Array(e.target.result);
                let workbook = xlsx.read(data, {type:'array'});
                
                workbook.SheetNames.forEach((sheetNames)=>{
                    let row_data = xlsx.utils.sheet_to_row_object_array(workbook.Sheets[sheetNames]);
                    hojas.push({
                        hoja: sheetNames,
                        data: row_data
                    })
                });

                console.log(file);
                
            }
        }
        
    }
    return (
        <Container fluid textAlign='center' style={{'padding-top':'25%'}}>
            <Header as='h2'>Importa tu archivo XLSX</Header>
            <InputFile
                button={{icon:'file excel',className:'positive',size:'huge',labelPosition:'left', label:{content:'Importar'}}}
                input={{
                    id: 'importar',name:'importar',
                    onChange: handleUpload
                }}
            />
        </Container>
    );
};
export default Importar;