/** V1 routes under one roor */
import {v1Routes} from "../common/constants"
import {getSampleUser, setSampleUser} from '../api'

const express = require("express");
export const router = express.Router();


// APIs

router.get(v1Routes.SAMPLE_USER, getSampleUser);
router.post(v1Routes.SAMPLE_USER, setSampleUser);