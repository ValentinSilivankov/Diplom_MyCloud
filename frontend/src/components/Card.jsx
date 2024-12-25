import React from 'react'
import ScreenFile from '../assets/file-blank-solid-240.png';
import edit_file from '../assets/edit.png';
import detail_file from '../assets/Documents.png';
import download_file from '../assets/download.png';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { variables } from './../utils/variables';

function Card({ props }) {

    // Split the string name of file
    let newNameFile = props.file_name.slice(0, 10)
    if (newNameFile.length < props.file_name.length) {
        newNameFile += '...';
    }


    return (
        <div>
            {/* <!--Card --> */}
            <div className='w-40 p-2 bg-white rounded-xl transform transition-all 
            hover:-translate-y-1 duration-300 shadow-lg
            hover:shadow-2xl'>
                <div className='static flex justify-start items-center'>
                    {
                        variables.format_files.includes(props.file_type) ?
                            (
                                // eslint-disable-next-line jsx-a11y/alt-text
                                <img className="h-20 w-20 object-cover object-center rounded-xl"
                                    src={`${variables.STATIC_URL}${props.file_file}`} />
                            ) : (
                                // eslint-disable-next-line jsx-a11y/alt-text
                                <img className="h-20 w-20 object-cover object-center rounded-xl"
                                    src={`${ScreenFile}`} />
                            )}
                    <div className="p-2 absolute top-0 right-0 
                        font-medium rounded-tr-xl bg-[#686868] text-white text-center">
                        {props.file_type}
                    </div>
                </div>
                <div className='p-2'>
                    <h2 className='text-xs text-left font-normal'>{newNameFile}</h2>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <Tippy content={<span>Edit file</span>}>
                        <Link to={'/update/' + props.id}>
                            <img className='h-10 w-10 rounded-xl' src={edit_file} alt='delet file' />
                        </Link>
                    </Tippy>
                    <Tippy content={<span>Detail file</span>}>
                        <Link to={'/detail/' + props.id}>
                            <img className='h-10 w-10 rounded-xl' src={detail_file} alt='delet file' />
                        </Link>
                    </Tippy>
                    <Tippy content={<span>Download file</span>}>
                        <a href={`${variables.STATIC_URL}${props.file_file}`} target='_blank' rel="noreferrer" download>
                            <img className='h-10 w-10 rounded-xl' src={download_file} alt='download file' />
                        </a>
                    </Tippy>

                </div>
            </div>
        </div >
    )
}

export default Card
