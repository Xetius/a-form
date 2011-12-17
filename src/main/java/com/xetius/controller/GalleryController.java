package com.xetius.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * User: chris
 * Date: 17/12/2011
 * Time: 00:43
 */
@Controller
public class GalleryController {
    
    @RequestMapping(value = "/gallery", method = RequestMethod.GET)
    public String showGalleryPage() {
        return "gallery";
    }
}
