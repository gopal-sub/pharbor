import express from 'express';
import type {Request, Response} from 'express';
import {createCredentials_controller, getCredentials_controller, updateCredential_controller} from '../controller/credentialController.js'

// validate input
import {userValidatorInputCreateCredential,userValidatorInputUpdateCredential} from '../middleware/credentialObjectValidator.js'

const Router = express.Router;

export const credentialRouter  = Router()

credentialRouter.get('/credentials', getCredentials_controller);

credentialRouter.post('/credential',userValidatorInputCreateCredential,createCredentials_controller);

credentialRouter.patch('/credential', userValidatorInputUpdateCredential, updateCredential_controller);


// credentialRouter.delete('/credential', );