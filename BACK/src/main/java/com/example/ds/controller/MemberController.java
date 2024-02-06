package com.example.ds.controller;

import com.example.ds.dto.MemberDTO;
import com.example.ds.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
public class MemberController {
    private final MemberService memberService; // MemberService 의존성 주입
//    @PostMapping('/login') // http get 요청에 대한 처리를 위한 매핑
//    public ResponseEntity<String> login(@RequestBody MemberDTO memberDTO) {


//        Authentication authentication = memberService.authenticate(memberDTO.getUsername(), memberDTO.getPassword());
//        if (authentication.isAuthenticated()) {
//            // You can generate a token or set the user as authenticated in the session
//            // For simplicity, here, we are just returning a success message
//            return ResponseEntity.ok("Login successful");
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
//        }
//    }


//    private final MemberMailService memberMailService;

//    @GetMapping("")
////    @Operation(description = "현재 로그인 중인 회원 정보를 조회")
//    public ResponseEntity<MemberResponseDTO> findCurrentLoginMember() throws NoSuchUsernameException {
//        return new ResponseEntity<>(MemberResponseDTO.toDTO(SecurityUtil.getCurrentLoginMember())
//                , HttpStatus.OK);
//    }
//
//    @PutMapping
//    public

}

