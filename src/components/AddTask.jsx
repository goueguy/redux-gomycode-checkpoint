import React from 'react';

const AddTask = () => {
    return (
        <div className='container mx-auto'>
            <h1 style={{textAlign:"center"}}>AJOUTER UNE TACHE</h1>
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <form>
                        <input type="text" className="form-control" name="description" placeholder='Description de la Tâche...' />
                    </form>
                </div>
 
                <div className="col-lg-3 d-flex">
                    <span>STATUT:&nbsp;&nbsp;</span>
                    <div className="form-check">
                        <input className="form-check-input" name="statut" type="radio"/>
                        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                        OUI&nbsp;&nbsp;
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" name="statut" type="radio"/>
                        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                        &nbsp;NON
                        </label>
                    </div>
                </div>
                <div className='col-lg-3 offset-lg-3 mt-3'>
                    <button type='button'className='btn-block btn btn-primary'>AJOUTER</button>
                </div>
            </div>
        </div>
    );
};

export default AddTask;