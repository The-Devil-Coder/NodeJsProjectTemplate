/** V1 routes under one roor */
import {v1Routes} from "../common/constants"
import {getSampleUser, setSampleUser, updateSampleUser, deleteSampleUser} from '../api'

const express = require("express");
export const router = express.Router();


// APIs

router.get(v1Routes.SAMPLE_USER, getSampleUser);
router.post(v1Routes.SAMPLE_USER, setSampleUser);
router.put(v1Routes.SAMPLE_USER, updateSampleUser);
router.delete(v1Routes.SAMPLE_USER, deleteSampleUser);