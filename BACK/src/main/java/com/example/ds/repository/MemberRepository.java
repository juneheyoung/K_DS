package com.example.ds.repository;

import com.example.ds.dto.MemberDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import java.lang.reflect.Member;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class MemberRepository {
    private final SqlSessionTemplate sql;
    public MemberDTO login(String userEmail, String userPass){
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("userEmail", userEmail);
        paramMap.put("userPass", userPass);
        return sql.selectOne("Member.login", paramMap);
    }

//    public void update(MemberDTO memberDTO) {
//        sql.update("Member.update",memberDTO);
//    }

    public MemberDTO findById(int userId) {
        return sql.selectOne("Member.findById",userId);
    }

    //중복이메일 점검
    public boolean existsById(String userEmail) {
        return sql.selectOne("Member.existsById",userEmail);
    }
    //중복닉네임 점검
    public boolean existsByNickname(String userName) {
        return sql.selectOne("Member.existsByNickname",userName);

    }

    public void updateMemberInfo(MemberDTO memberDTO) {
         sql.update("Member.updateMemberInfo", memberDTO);
    }
//
//    public Optional<MemberDTO> findByEmail(String userEmail) {
//        return Optional.ofNullable(sql.selectOne("Member.findByEmail", userEmail));
//    }
//
//    public void updateUser(MemberDTO updatedUser) {
//        sql.update("Member.updateUser", updatedUser);
//    }
//
//    public Optional<MemberDTO> findByName(String userName) {
//        return Optional.ofNullable(sql.selectOne("Member.findByName", userName));
//    }
//
//----------------------
//
//    public MemberDTO login(String userEmail, String userPass) {
////
//        return sql.selectOne("Member.login");
//    }


//    public int


}
