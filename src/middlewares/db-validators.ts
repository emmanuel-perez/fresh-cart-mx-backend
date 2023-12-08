import { Model } from "mongoose";

export const validateDocumentIdExists = async <T>( id: string, model: Model<T> ) => {
    const documentExists = await model.findById( id );
    if ( !documentExists ) {
        const collectionName = model.collection.name;
        throw new Error (`There is no document with id ${ id } in collection ${ collectionName }`);
    }
}

export const validateDocumentUniqueName = async <T>( name: string, model: Model<T> ) => {
    const lowerCaseName = name.toLowerCase();
    const nameAlreadyOnDB = await model.findOne({ name: lowerCaseName });
    if ( nameAlreadyOnDB ) {
        const collectionName = model.collection.name;
        throw new Error(`There is already a document with name: ${ lowerCaseName } in collection ${ collectionName }`);
    }
}

export const validateDocumentStatus = async <T>( id: string, model: Model<T> ) => {
    const document = await model.findById( id );
    if ( document && 'status' in document && document.status === false ) {
        const collectionName = model.collection.name;
        throw new Error (`The document with id ${ id } has been deactivated from database in collection ${ collectionName }`);
    }
}