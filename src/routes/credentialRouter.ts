import express from 'express';
import type {Request, Response} from 'express';
import {createCredentials} from '../controller/credentialController.js'

// validate input
import {userValidatorInputCreateUser} from '../middleware/credentialObjectValidator.js'

const Router = express.Router;

export const credentialRouter  = Router()

// credentialRouter.get('/credentials');

credentialRouter.post('/credential',userValidatorInputCreateUser,createCredentials);

// credentialRouter.put('/credential', userValidatorInputCreateUser );


// credentialRouter.delete('/credential', );